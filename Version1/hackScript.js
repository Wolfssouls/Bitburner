/** @param {NS} ns **/
export async function main(ns) {
try{
	await ns.sleep(ns.args[1]);
	await ns.hack(ns.args[0]);
	var scriptID = ns.args[2];
}
catch(err){
	ns.alert(err + " hack Script");
}
}