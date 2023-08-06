import importlib
import os
from typing import Iterable, Callable, Dict, Any, Tuple, List

from django.core.exceptions import ImproperlyConfigured

from bukdjango_envsettings.conversion import MAPPING
from bukdjango_envsettings.utils import gather_settings, eval_settings


def update_from_env(
        pre: str = "DJANGO_",
        mapping: Dict[str, Callable[[str], Any]] = MAPPING,
        extra_mapping: Dict[str, Callable[[str], Any]] = None,
        allowed: Iterable[str] = MAPPING,
        extra_allowed: Iterable[str] = None,
        hook: Callable[[str, Any], Tuple[str, Any]] = None
):
    """
    Update settings module that is set by `DJANGO_SETTINGS_MODULE` env variable.
    :param pre: prefix for environment variables
    :param mapping: mapping of `setting name`: `conversion function`
    :param extra_mapping: same as mapping but will update defaults
    :param allowed: iterable of settings that are allowed to be set from env
    :param extra_allowed: same as allowed but will update defaults
    :param hook: function that takes and returns `setting name` and `setting value`
    """
    settings_module_path = os.environ.get('DJANGO_SETTINGS_MODULE')

    if not settings_module_path:
        raise ImproperlyConfigured(
            '`DJANGO_SETTINGS_MODULE` environment variable is `None`'
        )

    # update mapping
    if extra_mapping:
        mapping.update(extra_mapping)

    # convert allowed
    allowed = list(allowed)

    # update allowed
    if extra_allowed:
        allowed.extend(list(extra_allowed))

    # import `DJANGO_SETTINGS_MODULE`
    settings_module = importlib.import_module(settings_module_path)

    # gather all environment settings
    env_settings = gather_settings(pre)

    # evaluate settings
    converted_settings = eval_settings(env_settings, mapping)

    for k, v in converted_settings.items():
        if k in allowed:
            if hook:
                k, v = hook(k, v)
            setattr(settings_module, k, v)
