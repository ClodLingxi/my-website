# Tips

## Class

### Dataclass
```python
@dataclass(repr=False, eq=False)
class Embed:
    hidden_size: int = 768
    num_audio_tokens: int = 626
    num_text_tokens: int = 21178
    num_vq: int = 4
```