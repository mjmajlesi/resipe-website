import axios from 'axios';

// TheMealDB — free, no API key, no rate limit.
const BASE = 'https://www.themealdb.com/api/json/v1/1';

export interface IMeal {
  id: string;
  title: string;
  image: string;
  category?: string;
  area?: string;
}

export interface IMealDetail extends IMeal {
  instructions: string;
  ingredients: { name: string; measure: string }[];
  youtube?: string;
  source?: string;
  tags: string[];
}

interface RawMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string | null;
  strArea?: string | null;
  strInstructions?: string | null;
  strYoutube?: string | null;
  strSource?: string | null;
  strTags?: string | null;
}

function toMeal(m: RawMeal): IMeal {
  return { id: m.idMeal, title: m.strMeal, image: m.strMealThumb, category: m.strCategory ?? undefined, area: m.strArea ?? undefined };
}

function toDetail(m: RawMeal): IMealDetail {
  const raw = m as unknown as Record<string, unknown>;
  const ingredients = Object.keys(raw)
    .filter((k) => k.startsWith('strIngredient') && raw[k])
    .map((k) => ({
      name: String(raw[k]),
      measure: String(raw[k.replace('strIngredient', 'strMeasure')] || ''),
    }));
  return {
    ...toMeal(m),
    instructions: (m.strInstructions ?? '').replace(/\r\n/g, '\n'),
    ingredients,
    youtube: m.strYoutube ?? undefined,
    source: m.strSource ?? undefined,
    tags: m.strTags ? m.strTags.split(',') : [],
  };
}

export const getPopuler = async (): Promise<IMeal[]> => {
  // ponytail: random.php returns one meal per call; fire a few in parallel for the carousel
  const picks = await Promise.all(Array.from({ length: 8 }, () => axios.get(`${BASE}/random.php`)));
  const seen = new Set<string>();
  return picks.map(({ data }) => toMeal(data.meals[0])).filter((m) => !seen.has(m.id) && seen.add(m.id));
};

export const getVegetarian = async (): Promise<IMeal[]> => {
  const { data } = await axios.get(`${BASE}/filter.php`, { params: { c: 'Vegetarian' } });
  return ((data.meals ?? []) as RawMeal[]).slice(0, 12).map(toMeal);
};

export const getCuisine = async (name: string | undefined): Promise<IMeal[]> => {
  const { data } = await axios.get(`${BASE}/filter.php`, { params: { a: name } });
  return ((data.meals ?? []) as RawMeal[]).map(toMeal);
};

export const getSearched = async (name: string | undefined): Promise<IMeal[]> => {
  const { data } = await axios.get(`${BASE}/search.php`, { params: { s: name } });
  return ((data.meals ?? []) as RawMeal[]).map(toMeal);
};

export const getInformation = async (name: string | undefined): Promise<IMealDetail> => {
  const { data } = await axios.get(`${BASE}/lookup.php`, { params: { i: name } });
  if (!data.meals?.[0]) throw new Error('Recipe not found');
  return toDetail(data.meals[0]);
};
