# ***************************************************************
# Copyright (c) 2020 Jittor. Authors: 
#     Dun Liang <randonlang@gmail.com>. 
# All Rights Reserved.
# This file is subject to the terms and conditions defined in
# file 'LICENSE.txt', which is part of this source code package.
# ***************************************************************
import unittest
import jittor as jt
import numpy as np

class TestClone(unittest.TestCase):
    def test(self):
        jt.clean()
        b = a = jt.array(1.0)
        for i in range(10):
            b = b.clone()
            if i==5: c=b
        b.sync()
        assert jt.number_of_lived_vars()==11
        c.stop_grad()
        assert jt.number_of_lived_vars()==3

if __name__ == "__main__":
    unittest.main()