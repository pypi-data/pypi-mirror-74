import torch

import numpy as np

from PIL import Image
from PIL import ImageFile


ImageFile.LOAD_TRUNCATED_IMAGES = True


class ClassificationLoader:
    def __init__(self, image_paths, targets, resize, augmentations=None):
        self.image_paths = image_paths
        self.targets = targets
        self.resize = resize
        self.augmentations = augmentations

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, item):
        image = Image.open(self.image_paths[item])
        targets = self.targets[item]
        if self.resize is not None:
            image = image.resize(
                (self.resize[1], self.resize[0]), resample=Image.BILINEAR
            )
        image = np.array(image)
        if self.augmentations is not None:
            augmented = self.augmentations(image=image)
            image = augmented["image"]
        image = np.transpose(image, (2, 0, 1)).astype(np.float32)
        return {
            "image": torch.tensor(image, dtype=torch.float),
            "targets": torch.tensor(targets, dtype=torch.long),
        }


class RCNNLoader:
    def __init__(self, image_paths, bounding_boxes, augmentations=None, torchvision_format=True):
        self.image_paths = image_paths
        self.bounding_boxes = bounding_boxes
        self.augmentations = augmentations
        self.torchvision_format = torchvision_format

    def __len__(self):
        return len(self.image_paths)
    
    def __getitem__(self, item):
        image = Image.open(self.image_paths[item])
        bboxes = self.bounding_boxes[item]
        image = np.array(image)
        if self.augmentations is not None:
            augmented = self.augmentations(image=image, bboxes=bboxes)
            image = augmented["image"]
            bboxes = augmented["bboxes"]
        
        image = np.transpose(image, (2, 0, 1)).astype(np.float32)
        bboxes = np.array(bboxes)

        bboxes[:, 2] = bboxes[:, 0] + bboxes[:, 2]
        bboxes[:, 3] = bboxes[:, 1] + bboxes[:, 3]

        area = (bboxes[:, 3] - bboxes[:, 1]) * (bboxes[:, 2] - bboxes[:, 0])        
        labels = torch.ones((bboxes.shape[0],), dtype=torch.int64)
        is_crowd = torch.zeros((bboxes.shape[0],), dtype=torch.int64)
        
        target = {
                "boxes": torch.as_tensor(bboxes.tolist(), dtype=torch.float32),
                "area": torch.as_tensor(area.tolist(), dtype=torch.float32),
                "iscrowd": is_crowd,
                "labels": labels,
            }
        
        if self.torchvision_format:
            return torch.tensor(image, dtype=torch.float), target
        else:
            target["image"] = torch.tensor(image, dtype=torch.float)
            return target
