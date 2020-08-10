export const hash = (o: any): string => {
    const target: string = JSON.stringify(o);
    
    let hash: number = 0;
    if (target.length === 0) {
        return hash.toString();
    }

    for (var i = 0; i < target.length; i++) {
        var char = target.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }

    return (hash < 0 ? '<' : '>') + Math.abs(hash).toString(36);
}
