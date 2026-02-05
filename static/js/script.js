document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("dataTable");
    const tbody = table.querySelector("tbody");
    const headers = table.querySelectorAll("th");
    const searchInput = document.getElementById("searchInput");
    const orderSelect = document.getElementById("orderSelect");

    const modal = document.getElementById("addDataModal");
    const openModalBtn = document.querySelector(".banner__btn_primary");
    const closeModalBtn = document.getElementById("closeModal");
    const form = document.getElementById("addDataForm");

    let rows = Array.from(tbody.querySelectorAll("tr"));
    let currentSort = { column: null, direction: "asc" };

    // Modal
    openModalBtn.addEventListener("click", () => modal.classList.add("show"));
    closeModalBtn.addEventListener("click", () => modal.classList.remove("show"));

    // Añadir fila
    form.addEventListener("submit", e => {
        e.preventDefault();

        const data = new FormData(form);
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data.get("fecha")}</td>
            <td>${data.get("cliente")}</td>
            <td>${data.get("metrica")}</td>
            <td>${data.get("valor")}</td>
        `;

        tbody.appendChild(row);
        rows.push(row);

        form.reset();
        modal.classList.remove("show");
    });

    // Buscador
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();
        rows.forEach(row => {
            row.style.display = row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";
        });
    });

    // Orden desde select
    orderSelect.addEventListener("change", () => {
        if (!orderSelect.value) return;
        const [field, direction] = orderSelect.value.split("_");
        const map = { fecha: 0, cliente: 1, metrica: 2, valor: 3 };
        currentSort = { column: map[field], direction };
        sortRows();
        highlightHeader();
    });

    // Orden por header
    headers.forEach((th, index) => {
        th.addEventListener("click", () => {
            currentSort.direction =
                currentSort.column === index && currentSort.direction === "asc"
                    ? "desc"
                    : "asc";
            currentSort.column = index;
            updateSelect(index);
            sortRows();
            highlightHeader();
        });
    });

    function sortRows() {
        rows.sort((a, b) => {
            let A = a.children[currentSort.column].innerText;
            let B = b.children[currentSort.column].innerText;

            if (!isNaN(A) && !isNaN(B)) {
                return currentSort.direction === "asc" ? A - B : B - A;
            }

            return currentSort.direction === "asc"
                ? A.localeCompare(B)
                : B.localeCompare(A);
        });

        tbody.innerHTML = "";
        rows.forEach(row => tbody.appendChild(row));
    }

    function updateSelect(index) {
        const fields = ["fecha", "cliente", "metrica", "valor"];
        orderSelect.value = `${fields[index]}_${currentSort.direction}`;
    }

    function highlightHeader() {
        headers.forEach(th => th.classList.remove("active"));
        headers[currentSort.column].classList.add("active");
    }
});
