const inputs = process.argv

const approvers = inputs[2]
const actor = inputs[3]

console.log(approvers)
console.log(actor)

// JSON.parse(data)
const aaaa = JSON.parse(approvers)
console.log(aaaa)

if (Array.isArray(approvers)) {
  // check if actor is in the approvers list
  if (approvers.contains(actor)) {
    console.log("actor is valid approvers")
  } else {
    console.log("actor is not valid approvers")
    process.exit(1)
  }
} else {
  console.log(`approvers ${approvers} is not valid array`)
  process.exit(1)
}
