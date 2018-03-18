for (let i = 0; i <= 100; i++) {
    let f = i % 5 ? 'fizz' : ''
    let b = i % 3 ? 'buzz' : ''
    Boolean(f || b) ? console.log(`${f}${b}`) : null
}
