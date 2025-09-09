import { fetchRentalById } from "../../api/service";

export async function rentalLoader({ params, request }) {
  const lang = request.headers.get("accept-language")?.split(",")[0] || "fr";

  const { id } = params;
  if (!id) {
    throw new Response("ID missing", { status: 400 });
  }

  try {
    const rental = await fetchRentalById(id, lang);
    return rental;
  } catch {
    throw new Response("Not Found", { status: 404 });
  }
}
