
# Torch Tensor Types

This package is a Quality of Life improvement when prototyping and processing Tensor objects from the pyTorch library.
The TensorType class is a Pipeline for preprocessing tensors automatically, and include multiple utility methods.
You can add TensorTypes together to have a longer preprocessing pipeline.

For example, this code 
```py
fake_image = model(torch.unsqueeze(real_image, 0).cuda()).cpu().detach().numpy()[0]
```
can be replaced by
```py
fake_image = SingleDisplayableImage<<model(ModelInputFormat<<real_image)
```