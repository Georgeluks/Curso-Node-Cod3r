console.log('n-fatorial');

const fatorial = num => {
    if(num === 0) return 1
    return num  * fatorial(num - 1)
}

const num = parseInt(process.argv[2]);

console.log(`O Fatorial de ${num} eh: ${fatorial(num)}`);