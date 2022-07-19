let user = prompt("Ingrese su usuario")
let pass = prompt("Ingrese la contraseña")
let n1
let n2


if (user === "fede" & pass === "llave" ) {
    alert("Bienvenido! Ya podes usar la calculadora para multiplicar. Recorda que solo podes hacer 3 operaciones por dia")

    for (let i = 0; i < 3 ; i++) {
        n1 = prompt("Que numero queres multiplicar?")
        n2 = prompt("Por cual numero te gustaria multiplicarlo?")
        alert("El resultado es: "+n1*n2)
    }
    alert("Listo por hoy! mañana vas a poder hacer 3 multiplicaciones mas.")
}

else {
    alert("Usuario o Contraseña incorrecta")
}