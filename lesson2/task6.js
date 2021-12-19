/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/
var a = -12
var b = 36

function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case 'sum':
            return arg1 + arg2;
            break;
        case 'diff':
            return arg1 - arg2;
         break;
     case 'prod':
                   return arg1 * arg2;
         break;
        case 'quot':
            return arg1 / arg2;
         break;
}
}

alert("Summ: " + mathOperation(a,b,'sum'))
alert("Difference: " + mathOperation(a,b,'diff'))
alert("Prod: " + mathOperation(a,b,'prod'))
alert("Quotient: " + mathOperation(a,b,'quot'))
