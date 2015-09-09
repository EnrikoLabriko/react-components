# Form

Реализует форму для отправки данных на сервер.

Пример вызова:

```
<Form onSubmit={this.onSubmit} method="POST" action="">
    <Form.Content>
        <Input required placeholder="First Name" pattern="^[А-Яа-яЁё\s-]+$"
               errorMessage="А вот почему невалиден" successMessage="Всё в порядке" />
        <br />
        <br />
        <Input placeholder="Last Name" pattern="^[А-Яа-яЁё\s-]+$"
               errorMessage="А вот почему невалиден" successMessage="Всё в порядке" />
    </Form.Content>
    <br />
    <Form.Controls>
        <Form.SubmitButton
            ref="submitButton"
            size="xl"
            spinnerTheme="yellow">
            Отправить
        </Form.SubmitButton>
    </Form.Controls>
</Form>
```

Компонент `Form` должен содержать уникальный элемент `Form.Content`.


### Параметры компонента

| Поле      | Тип        | По умолчанию | Описание |
| ----------| ---------- | -------------| -------- |
| mix       | `String`   | `''`         | CSS-класс, который будет добавлен к классам элемента. |


### Элементы компонента

| Элемент   | Описание |
| ----------| -------- |
| Content      | Контент формы |
| Controls      | Контролы формы |
| SubmitButton      | Элемент, содержащий сабмит-кнопку и спиннер |


### Модификаторы элементов компонента

| Элемент   | Модификатор | Допустимые значения |  По умолчанию | Описание |
| ----------| ----------- | ------------------- | ------------- | -------- |
| Content      | mix    | `String`       |     `''`   | Добавляет css-класс элементу.  |
| Controls      | mix    | `String`       |     `''`   | Добавляет css-класс элементу.  |
| SubmitButton      | mix    | `String`       |     `''`   | Добавляет css-класс элементу.  |
| SubmitButton      | size     | `String`       |     `'m'`   | Размер сабмит кнопки и спиннера. |
| SubmitButton      | spinnerTheme     | `'yellow', 'black'`          | `'black'`    | Стилевое оформление спиннера. |
| SubmitButton      | view     | `String`          | `'action'`    | Внешний вид кнопки. |


### Параметры элементов компонента

| Элемент   | Поле      | Тип        | По умолчанию | Описание |
| ----------| ----------| ---------- | -------------| -------- |
| SubmitButton      | showSpin | `Function` | | Отображает спиннер. |
| SubmitButton      | hideSpin | `Function` | | Скрывает спиннер. |
