const inputs = process.argv

const approvers = inputs[0]
const actor = inputs[1]

console.log(approvers)
console.log(actor)

if (Array.isArray(approvers)) {
  // check if actor is in the approvers list
  if (approvers.contains(actor) {
    console.log("actor is valid approvers")  
  } else {
    console.log("actor is not valid approvers")  
    proces.exit(1)
  }
} else {
  console.log("approvers is not a list")
  proces.exit(1)
}
