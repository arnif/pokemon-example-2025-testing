import { describe, expect, it, vi, type Mock } from "vitest";
import { fetchPokemonById } from "./pokemonService";

vi.stubGlobal("fetch", vi.fn());

describe("PokemonService", () => {
  it("should fetchPokemonById 1", async () => {
    const mockPokemon = { id: 1 };
    (fetch as Mock).mockResolvedValue({
      ok: true,
      json: () => mockPokemon,
    });
    const result = await fetchPokemonById("1");
    expect(result.id).toEqual(1);
  });
  it("should fetchPokemonById 2", async () => {
    const mockPokemon = { id: 2 };
    (fetch as Mock).mockResolvedValue({
      ok: true,
      json: () => mockPokemon,
    });
    const result = await fetchPokemonById("2");
    expect(result.id).toEqual(2);
  });

  it("should throw error if the request fails", async () => {
    (fetch as Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchPokemonById("2")).rejects.toThrow(
      "Failed to fetch pokemon"
    );
  });
});
