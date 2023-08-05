# ***************************************************************
# Copyright (c) 2020 Jittor. Authors: 
#     Guoye Yang <498731903@qq.com>
#     Dun Liang <randonlang@gmail.com>. 
# All Rights Reserved.
# This file is subject to the terms and conditions defined in
# file 'LICENSE.txt', which is part of this source code package.
# ***************************************************************
# This model is generated by pytorch converter.
import jittor as jt
from jittor import nn

__all__ = [
    'VGG', 'vgg11', 'vgg11_bn', 'vgg13', 'vgg13_bn', 'vgg16', 'vgg16_bn',
    'vgg19_bn', 'vgg19',
]

class VGG(nn.Module):

    def __init__(self, features, num_classes=1000, init_weights=True):
        super(VGG, self).__init__()
        self.features = features
        self.avgpool = nn.AdaptiveAvgPool2d((7, 7))
        self.classifier = nn.Sequential(
            nn.Linear(512 * 7 * 7, 4096),
            nn.ReLU(),
            nn.Dropout(),
            nn.Linear(4096, 4096),
            nn.ReLU(),
            nn.Dropout(),
            nn.Linear(4096, num_classes),
        )

    def execute(self, x):
        x = self.features(x)
        x = self.avgpool(x)
        x = jt.reshape(x, [x.shape[0],-1])
        x = self.classifier(x)
        return x

def make_layers(cfg, batch_norm=False):
    layers = []
    in_channels = 3
    for v in cfg:
        if v == 'M':
            layers += [nn.Pool(kernel_size=2, stride=2, op="maximum")]
        else:
            conv2d = nn.Conv(in_channels, v, kernel_size=3, padding=1)
            if batch_norm:
                layers += [conv2d, nn.BatchNorm(v), nn.ReLU()]
            else:
                layers += [conv2d, nn.ReLU()]
            in_channels = v
    return nn.Sequential(*layers)


cfgs = {
    'A': [64, 'M', 128, 'M', 256, 256, 'M', 512, 512, 'M', 512, 512, 'M'],
    'B': [64, 64, 'M', 128, 128, 'M', 256, 256, 'M', 512, 512, 'M', 512, 512, 'M'],
    'D': [64, 64, 'M', 128, 128, 'M', 256, 256, 256, 'M', 512, 512, 512, 'M', 512, 512, 512, 'M'],
    'E': [64, 64, 'M', 128, 128, 'M', 256, 256, 256, 256, 'M', 512, 512, 512, 512, 'M', 512, 512, 512, 512, 'M'],
}


def _vgg(arch, cfg, batch_norm, **kwargs):
    model = VGG(make_layers(cfgs[cfg], batch_norm=batch_norm), **kwargs)
    return model


def vgg11(**kwargs):
    return _vgg('vgg11', 'A', False, **kwargs)


def vgg11_bn(**kwargs):
    return _vgg('vgg11_bn', 'A', True, **kwargs)


def vgg13(**kwargs):
    return _vgg('vgg13', 'B', False, **kwargs)


def vgg13_bn(**kwargs):
    return _vgg('vgg13_bn', 'B', True, **kwargs)


def vgg16(**kwargs):
    return _vgg('vgg16', 'D', False, **kwargs)


def vgg16_bn(**kwargs):
    return _vgg('vgg16_bn', 'D', True, **kwargs)


def vgg19(**kwargs):
    return _vgg('vgg19', 'E', False, **kwargs)


def vgg19_bn(**kwargs):
    return _vgg('vgg19_bn', 'E', True, **kwargs)