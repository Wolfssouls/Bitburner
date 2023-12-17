/** @param {NS} ns **/
export async function main(ns) {
try{
	await ns.sleep(ns.args[1]);
	await ns.grow(ns.args[0]);
	
}
catch(err){
	ns.alert(err + " Grow Script");
}
}