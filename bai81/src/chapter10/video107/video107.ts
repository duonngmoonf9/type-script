console.log("video 107");
interface IUser {
    id: string;
    name: string;
    age: number
}
const elementListUser = document.querySelector('.listUser tbody');


const fetchAllUser = async () => {
    const res = await fetch("http://localhost:9090/users");
    const data: IUser[] = await res.json();
    console.log(">>>>>>>data ", data);
    if (data && data.length > 0) {
        data.forEach(item => {
            return elementListUser!.innerHTML += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td><button data-id=${item.id} class="btn-delete">xoa</button></td>
            </tr>
            `
        })
    }
}

elementListUser!.addEventListener("click", async (e) => {
    const target = e.target as HTMLElement
    const btn = target.closest(".btn-delete");
    if (btn) {
        const id: string | null = target.getAttribute("data-id");
        await handleDelete(id!);
        target.closest("tr")?.remove();
    }
})
const handleDelete = async (id: string) => {
    await fetch(`http://localhost:9090/users/${id}`, {
        method: "delete"
    });
}
fetchAllUser();