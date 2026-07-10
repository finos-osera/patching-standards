(function () {
  const search = document.getElementById("catalogueSearch");
  if (!search) return;

  const rows = Array.from(document.querySelectorAll(".standard-row"));
  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    rows.forEach((row) => {
      const haystack = `${row.dataset.title || ""} ${row.dataset.content || ""} ${row.dataset.type || ""}`;
      row.hidden = query !== "" && !haystack.includes(query);
    });
  });
})();
