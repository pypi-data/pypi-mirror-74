from sdv.demo import load_demo
from sdv.tabular.ctgan import CTGAN


def test_ctgan():
    users = load_demo(metadata=False)['users']

    ctgan = CTGAN(
        primary_key='user_id',
        epochs=1
    )
    ctgan.fit(users)

    sampled = ctgan.sample()

    # test shape is right
    assert sampled.shape == users.shape

    # test user_id has been generated as an ID field
    assert list(sampled['user_id']) == list(range(0, len(users)))

    assert ctgan.get_metadata().to_dict() == {
        'fields': {
            'user_id': {'type': 'id', 'subtype': 'integer'},
            'country': {'type': 'categorical'},
            'gender': {'type': 'categorical'},
            'age': {'type': 'numerical', 'subtype': 'integer'}
        },
        'constraints': [],
        'model_kwargs': {}
    }
