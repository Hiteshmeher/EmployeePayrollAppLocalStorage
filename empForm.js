
window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
const createInnerHtml = () =>{
    const innetHtml =`
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>department</th>
        <th>salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>
            <img class="profile" alt="" src="./assets/profile-images/Ellipse -2.png">
        </td>
        <td>Hitesh meher</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Engineer</div>
        </td>
        <td>3000000</td>
        <td>21 Sept 2022</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="./assets/icons/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="./assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innetHtml;
}
