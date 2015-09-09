# Dropdown

Пример вызова:

```
<Button onClick={this.togglePopup.bind(this, 'dropdownExamplePle')}>[Dropdown Example] Press</Button>
<Dropdown
    hasArrow
    ref="dropdownExamplePle"
    title="Menu Title"
    direction="top"
    axis="right">
    <Dropdown.Item>Первый пункт, текст</Dropdown.Item>
    <Dropdown.Item>
        <Button>Второй пункт, кнопка</Button>
    </Dropdown.Item>
    <Dropdown.Item>
        <Link to="#">Третий пункт, ссылка</Link>
    </Dropdown.Item>
</Dropdown>
```

### Модификаторы компонента

| Модификатор | Допустимые значения          | По умолчанию | Описание |
| ----------- | ---------------------------- | ------------ |-------- |
| theme       | `'normal'`                   | `'normal'`   | Стилевое оформление |


### Параметры компонента

| Поле      | Тип        | По умолчанию | Описание |
| ----------| ---------- | -------------| -------- |
| autoclosable | `Boolean` |  `true`    | Закрывается ли попап при клике в область вне него |
| arrowOffsetLeft | `String` |          | Специфический отступ слева у стрелки, если нужен |
| arrowOffsetTop | `String` |           | Специфический отступ сверху у стрелки, если нужен |
| axis      | `String`   | `'center'`   | Ось, относительно которой происходит позиционирование |
| direction | `String`   | `'bottom'`   | Направление раскрытия попапа |
| hasArrow  | `Boolean`  | `false`      | Нужна ли стрелка открытия попапа |
| menuType        | `'vert', 'horiz'`   |    `'vert'`   | Тип меню: вертикальное, горизонтальное.  |
| size        | `'m'`               |      `'m'`    | Размер меню.  |
| width     | `String`   |              | Ширина элемента, при задании нужно указывать единицы |

### Состояния компонента

| Поле      | Тип        | По умолчанию | Описание |
| ----------| ---------- | -------------| -------- |
| disabled  | `Boolean`  | `false`       | Задизейблено ли меню |
