
import { SubscribeToHellfireClub } from './firebase/hellfire-club.js';


const txtName = document.getElementById ('txtName')

console.log (txtName)
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async() => {
    const subscription = {
        name : txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    // Salvar no banco de dados //
    const subscriptionId = SubscribeToHellfireClub(subscription)
    console.log (`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value =''  
    txtEmail.value= ''
    txtLevel.value = ''
    txtCharacter.value = ''

})
// ordem do meu banco de dados, D&D club // 
