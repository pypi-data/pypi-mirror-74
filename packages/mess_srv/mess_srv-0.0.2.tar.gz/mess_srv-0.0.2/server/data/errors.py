"""Ошибки"""


class IncorrectDataRecivedError(Exception):
    """Некорректное сообщение от удаленного компьютера"""
    def __str__(self):
        return 'Принято некорректное сообщение от удалённого компьютера.'


class ServerError(Exception):
    """Ошибка сервера"""
    def __init__(self, text):
        self.text = text

    def __str__(self):
        return self.text


class NonDictInputError(Exception):
    """Аргумент не является словарем"""
    def __str__(self):
        return 'Аргумент функции должен быть словарём.'


class ReqFieldMissingError(Exception):
    """Отсутствие обязательного поля"""
    def __init__(self, missing_field):
        self.missing_field = missing_field

    def __str__(self):
        return f'В принятом словаре отсутствует обязательное поле {self.missing_field}.'
