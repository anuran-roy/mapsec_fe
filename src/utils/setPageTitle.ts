export default function setPageTitle(title: string) {

    let titleNode: any = document.getElementById("page_title");
    titleNode.innerText = title;
} 