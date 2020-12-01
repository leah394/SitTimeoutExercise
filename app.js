// SET TIMEOUT METHOD

setTimeout(() => {
    const first = document.querySelector('#first');
    const p1 = document.createElement('p');
    p1.innerText = `Hi`;
    first.append(p1);
}, 1000);

setTimeout(() => {
    const nesting = document.querySelector('#nesting');
    const p2 = document.createElement('p');
    p2.innerText = "Outer";
    nesting.append(p2);
    setTimeout(() => {
        const p3 = document.createElement('p');
        p3.innerText = "Inner";
        nesting.append(p3);
    }, 1000);
}, 2000);