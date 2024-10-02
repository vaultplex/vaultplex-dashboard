 # Introduction 

 ## TODO

~~We need to bring the devnet Program deployed ID ~~

 Also we need the types file and the IDL to provide a easier integration

 Then we need install anchor and initialize the anchor provider

 After that we will integrate the program methods in helpers so the react components can use them

 We need some UX for the creation. It should start with mockup data

 Link the UX buttons and list with the program data

 Also it's needed to add env variables with Program ID + Helius RPC

 Probably that's enough for the hackathon.

 UX time!!!

## Instructions

MUST initialize
* initialize_vault

OPTIONAL can have extensions
* initialize_lock_extension
* initialize_deposit_period_extension
* initialize_access_control_extension
* initialize_fee_extension

Actions
* lock_vault
* unlock_vault

Finally 
* deposit_sol


## Details

### initialize_vault

 Very simple requirement, a SEED (const seed = new BN(randomBytes(8));)
 The seed should be generated underneat without the need of the user to know it until the listing



