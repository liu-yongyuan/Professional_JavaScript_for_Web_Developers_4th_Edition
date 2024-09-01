export const logSpace = () => {
    console.log("==== ==== ====");
};

export const zipTag = (strings, ...expressions) => {
    return expressions.map((e, i) => `${e}${strings[i + 1]}`).join("");
};