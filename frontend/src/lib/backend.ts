const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

async function backendFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BACKEND_URL}${path}`, {
    ...options,
    cache: "no-store",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    },
  });

  const json = (await response.json()) as ApiResponse<T>;

  if (!response.ok || json.success === false) {
    throw new Error(json.error || response.statusText || "Backend request failed");
  }

  return json.data as T;
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export async function fetchContactInfo() {
  return backendFetch<unknown>("/api/contact");
}

export async function updateContactInfo(data: unknown) {
  return backendFetch<unknown>("/api/contact", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function fetchSchoolStats() {
  return backendFetch<unknown>("/api/schools/stats");
}

export async function fetchSchools() {
  return backendFetch<unknown>("/api/schools");
}

export async function createSchool(data: unknown) {
  return backendFetch<unknown>("/api/schools", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateSchool(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/schools/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteSchool(id: number) {
  return backendFetch<unknown>(`/api/schools/${id}`, {
    method: "DELETE",
  });
}

export async function fetchNews() {
  return backendFetch<unknown>("/api/news");
}

export async function createNews(data: unknown) {
  return backendFetch<unknown>("/api/news", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateNews(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/news/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteNews(id: number) {
  return backendFetch<unknown>(`/api/news/${id}`, {
    method: "DELETE",
  });
}

export async function fetchIssuances(query?: { category?: string; type?: string }) {
  const params = new URLSearchParams();
  if (query?.category) params.set("category", query.category);
  if (query?.type) params.set("type", query.type);
  return backendFetch<unknown>(`/api/issuances${params.toString() ? `?${params.toString()}` : ""}`);
}

export async function createIssuance(data: unknown) {
  return backendFetch<unknown>("/api/issuances", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateIssuance(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/issuances/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteIssuance(id: number) {
  return backendFetch<unknown>(`/api/issuances/${id}`, {
    method: "DELETE",
  });
}

export async function fetchEmployeeHonors() {
  return backendFetch<unknown>("/api/employee-honors");
}

export async function createEmployeeHonor(data: unknown) {
  return backendFetch<unknown>("/api/employee-honors", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateEmployeeHonor(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/employee-honors/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteEmployeeHonor(id: number) {
  return backendFetch<unknown>(`/api/employee-honors/${id}`, {
    method: "DELETE",
  });
}

export async function fetchLeaders() {
  return backendFetch<unknown>("/api/leaders");
}

export async function createLeader(data: unknown) {
  return backendFetch<unknown>("/api/leaders", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateLeader(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/leaders/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteLeader(id: number) {
  return backendFetch<unknown>(`/api/leaders/${id}`, {
    method: "DELETE",
  });
}

export async function fetchOrgCharts() {
  return backendFetch<unknown>("/api/org-chart");
}

export async function createOrgChart(data: unknown) {
  return backendFetch<unknown>("/api/org-chart", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateOrgChart(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/org-chart/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteOrgChart(id: number) {
  return backendFetch<unknown>(`/api/org-chart/${id}`, {
    method: "DELETE",
  });
}

export async function fetchTransparencyItems() {
  return backendFetch<unknown>("/api/transparency");
}

export async function createTransparencyItem(data: unknown) {
  return backendFetch<unknown>("/api/transparency", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateTransparencyItem(id: number, data: unknown) {
  return backendFetch<unknown>(`/api/transparency/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteTransparencyItem(id: number) {
  return backendFetch<unknown>(`/api/transparency/${id}`, {
    method: "DELETE",
  });
}

export async function uploadFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const base64Data = arrayBufferToBase64(arrayBuffer);
  return backendFetch<string>("/api/upload", {
    method: "POST",
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type,
      data: base64Data,
    }),
  });
}

export async function fetchCarouselSlides() {
  return backendFetch<unknown>("/api/carousel");
}

export async function createCarouselSlide(data: unknown) {
  return backendFetch<unknown>("/api/carousel", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function deleteCarouselSlide(id: number) {
  return backendFetch<unknown>(`/api/carousel/${id}`, {
    method: "DELETE",
  });
}

export async function loginUser(username: string, password: string) {
  return backendFetch<unknown>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function getNewsAction() {
  return fetchNews();
}

export async function updateNewsAction(formData: FormData) {
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const date = formData.get("date") as string;
  const category = formData.get("category") as string;
  const imageFile = formData.get("image") as File | null;
  const oldImagePath = formData.get("oldImagePath") as string;

  let imagePath = oldImagePath;
  if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
    imagePath = await uploadFile(imageFile);
  }

  const idStr = formData.get("id") as string;
  const id = idStr ? parseInt(idStr) : NaN;
  const payload = { title, excerpt, date, category, image: imagePath };

  if (isNaN(id)) {
    return createNews(payload);
  }

  return updateNews(id, payload);
}

export async function deleteNewsAction(id: number) {
  return deleteNews(id);
}

export async function getCarouselSlidesAction() {
  return fetchCarouselSlides();
}

export async function createCarouselSlideAction(formData: FormData) {
  const imageFile = formData.get("image") as File | null;
  if (!imageFile) {
    throw new Error("No image file provided");
  }

  const imagePath = await uploadFile(imageFile);
  return createCarouselSlide({ image: imagePath });
}

export async function deleteCarouselSlideAction(id: number) {
  return deleteCarouselSlide(id);
}

export async function getEmployeeHonorsAction() {
  return fetchEmployeeHonors();
}

export async function updateEmployeeHonorAction(formData: FormData) {
  const idStr = formData.get("id") as string;
  const month = formData.get("month") as string;
  const year = formData.get("year") as string;
  const imageFile = formData.get("image") as File | null;
  const oldImagePath = formData.get("oldImagePath") as string;

  let imagePath = oldImagePath || null;
  if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
    imagePath = await uploadFile(imageFile);
  }

  const payload = { month, year, image: imagePath };
  const id = idStr ? parseInt(idStr) : NaN;

  if (isNaN(id)) {
    return createEmployeeHonor(payload);
  }

  return updateEmployeeHonor(id, payload);
}

export async function deleteEmployeeHonorAction(id: number) {
  return deleteEmployeeHonor(id);
}

export async function getOrgChartsAction() {
  return fetchOrgCharts();
}

export async function updateOrgChartAction(formData: FormData) {
  const idStr = formData.get("id") as string;
  const department = formData.get("department") as string;
  const sortOrder = parseInt(formData.get("sortOrder") as string) || 0;
  const imageFile = formData.get("image") as File | null;
  const oldImagePath = formData.get("oldImagePath") as string;

  let imagePath = oldImagePath || null;
  if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
    imagePath = await uploadFile(imageFile);
  }

  const payload = { department, image: imagePath, sortOrder };
  const id = idStr ? parseInt(idStr) : NaN;

  if (isNaN(id)) {
    return createOrgChart(payload);
  }

  return updateOrgChart(id, payload);
}

export async function deleteOrgChartAction(id: number) {
  return deleteOrgChart(id);
}

export async function getIssuancesAction(category?: string, type?: string) {
  return fetchIssuances({ category, type });
}

export async function updateIssuanceAction(formData: FormData) {
  const idStr = formData.get("id") as string;
  const title = formData.get("title") as string;
  const number = formData.get("number") as string;
  const type = formData.get("type") as string;
  const category = formData.get("category") as string;
  const date = formData.get("date") as string;
  const year = formData.get("year") as string;
  const file = formData.get("file") as File | null;
  const oldFileUrl = formData.get("oldFileUrl") as string;

  let fileUrl = oldFileUrl || null;
  if (file && file.size > 0 && typeof file !== "string") {
    fileUrl = await uploadFile(file);
  }

  const payload = { title, number, type, category, date, year, fileUrl };
  const id = idStr ? parseInt(idStr) : NaN;

  if (isNaN(id)) {
    return createIssuance(payload);
  }

  return updateIssuance(id, payload);
}

export async function deleteIssuanceAction(id: number) {
  return deleteIssuance(id);
}

export async function getLeadersAction() {
  return fetchLeaders();
}

export async function updateLeaderAction(formData: FormData) {
  const idStr = formData.get("id") as string;
  const name = formData.get("name") as string;
  const position = formData.get("position") as string;
  const startYear = formData.get("startYear") as string;
  const endYear = formData.get("endYear") as string;
  const imageFile = formData.get("image") as File | null;
  const oldImagePath = formData.get("oldImagePath") as string;

  let imagePath = oldImagePath || null;
  if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
    imagePath = await uploadFile(imageFile);
  }

  const payload = { name, position, startYear, endYear, image: imagePath };
  const id = idStr ? parseInt(idStr) : NaN;

  if (isNaN(id)) {
    return createLeader(payload);
  }

  return updateLeader(id, payload);
}

export async function deleteLeaderAction(id: number) {
  return deleteLeader(id);
}

export async function getSchoolsAction() {
  return fetchSchools();
}

export async function getSchoolStatsAction() {
  return fetchSchoolStats();
}

export async function getSchoolsByCategoryAction(category: string) {
  const schools = await fetchSchools();
  if (!Array.isArray(schools)) return [];
  return schools.filter((school: any) => school.category?.toUpperCase() === category.toUpperCase());
}

export async function updateSchoolAction(formData: FormData) {
  const idStr = formData.get("id") as string;
  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const category = formData.get("category") as string;
  const cluster = formData.get("cluster") as string;
  const contact = formData.get("contact") as string;
  const type = formData.get("type") as string;
  const logoFile = formData.get("logo") as File | null;
  const bannerFile = formData.get("banner") as File | null;
  const oldLogoPath = formData.get("oldLogoPath") as string;
  const oldBannerPath = formData.get("oldBannerPath") as string;

  let logoUrl = oldLogoPath || null;
  let bannerUrl = oldBannerPath || null;

  if (logoFile && logoFile.size > 0 && typeof logoFile !== "string") {
    logoUrl = await uploadFile(logoFile);
  }
  if (bannerFile && bannerFile.size > 0 && typeof bannerFile !== "string") {
    bannerUrl = await uploadFile(bannerFile);
  }

  const payload = { name, location, category, cluster, contact, type, logo: logoUrl, banner: bannerUrl };
  const id = idStr ? parseInt(idStr) : NaN;

  if (isNaN(id)) {
    return createSchool(payload);
  }

  return updateSchool(id, payload);
}

export async function deleteSchoolAction(id: number) {
  return deleteSchool(id);
}

export async function getContactInfoAction() {
  return fetchContactInfo();
}

export async function updateContactInfoAction(formData: FormData) {
  const location = formData.get("location") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const officeHours = formData.get("officeHours") as string;
  const facebook = (formData.get("facebook") as string) || undefined;
  const twitter = (formData.get("twitter") as string) || undefined;
  const youtube = (formData.get("youtube") as string) || undefined;
  const website = (formData.get("website") as string) || undefined;

  return updateContactInfo({ location, phone, email, officeHours, facebook, twitter, youtube, website });
}

export async function getTransparencyItemsAction() {
  return fetchTransparencyItems();
}

export async function updateTransparencyItemAction(formData: FormData) {
  const rawData = {
    id: formData.get("id") as string,
    category: formData.get("category") as string,
    title: formData.get("title") as string,
    url: formData.get("url") as string,
    isExternal: formData.get("isExternal") === "true",
    year: (formData.get("year") as string) || null,
    order: parseInt(formData.get("order") as string || "0"),
  };

  if (rawData.id && rawData.id !== "new") {
    return updateTransparencyItem(parseInt(rawData.id), rawData);
  }
  return createTransparencyItem(rawData);
}

export async function deleteTransparencyItemAction(id: number) {
  return deleteTransparencyItem(id);
}

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const result = await loginUser(username, password);

  if (typeof window !== "undefined") {
    document.cookie = `auth_session=${encodeURIComponent(JSON.stringify(result))}; path=/; max-age=${60 * 60 * 24}`;
  }

  return result;
}

export function logout() {
  if (typeof window !== "undefined") {
    document.cookie = "auth_session=; path=/; max-age=0";
  }
}

