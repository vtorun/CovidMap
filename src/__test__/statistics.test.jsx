import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
import { totalApi } from "../utils/api";
import { totalData } from "../utils/constants";
import millify from "millify";

jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("istatistik component testleri", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // ---------------------
  // ---------------------
  test("bileşen renderlandığında ekrana loader gelir", () => {
    totalApi.get.mockReturnValue(new Promise(() => {}));
    render(<Statistics />);
    screen.getByTestId("loader");
  });
  // ---------------------
  // ---------------------
  test("api'den mesaj geldiğinde ekranda hata mesajı yazar", async () => {
    totalApi.get.mockRejectedValue(new Error("404 Hatası"));
    render(<Statistics />);
    await waitFor(() => screen.getByText("Üzgünüz Bir Sorun Oluştu"));
  });
  // ---------------------
  // ---------------------
  test("api'den mesaj geldiğinde ekrana veriler basılır", async () => {
    totalApi.get.mockResolvedValue({ data: { data: totalData } });
    render(<Statistics />);
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());
    screen.getByText(millify(totalData.confirmed));
    screen.getByText(millify(totalData.active));
    screen.getByText(millify(totalData.deaths));
  });
});
