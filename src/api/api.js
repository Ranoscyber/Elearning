const BASE_URL = "http://127.0.0.1:8000/api";

async function handleResponse(res) {
  if (!res.ok) {
    throw new Error("Request failed");
  }
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories/`);
  return handleResponse(res);
}

export async function getSubCategories(categoryId = "") {
  const url = categoryId
    ? `${BASE_URL}/subcategories/?category=${categoryId}`
    : `${BASE_URL}/subcategories/`;

  const res = await fetch(url);
  return handleResponse(res);
}

export async function getLessons({
  category = "",
  subcategory = "",
  page = 1,
  pageSize = 8,
} = {}) {
  const params = new URLSearchParams();

  if (category) params.append("category", category);
  if (subcategory) params.append("subcategory", subcategory);
  params.append("page", page);
  params.append("page_size", pageSize);

  const res = await fetch(`${BASE_URL}/lessons/?${params.toString()}`);
  return handleResponse(res);
}

export async function getLessonDetail(id) {
  const res = await fetch(`${BASE_URL}/lessons/${id}/`);
  return handleResponse(res);
}

export async function createContactMessage(formData) {
  const res = await fetch(`${BASE_URL}/contact-messages/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return handleResponse(res);
}