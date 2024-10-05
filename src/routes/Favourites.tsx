import { useState } from "react";
import TranslationCard from "../components/TranslationCard/TranslationCard";
import { Translation } from "../utils/types";

const Favourites: React.FC = () => {
  const [favourites, setFavourites] = useState<Translation[]>(
    JSON.parse(
      localStorage.getItem("favouriteTranslations") || JSON.stringify("")
    )
  );

  const handleDelete = (id: string) => {
    const favourites: Translation[] = JSON.parse(
      localStorage.getItem("favouriteTranslations") || JSON.stringify("")
    );

    const newFavourites = favourites.filter((favourite) => favourite.id !== id);

    setFavourites(newFavourites);
    localStorage.setItem(
      "favouriteTranslations",
      JSON.stringify(newFavourites)
    );
  };

  const handleEdit = (id: string, newTranslation: Translation) => {
    const favourites: Translation[] = JSON.parse(
      localStorage.getItem("favouriteTranslations") || JSON.stringify("")
    );

    const updatedIndex = favourites.findIndex(
      (favourite) => favourite.id === id
    );

    favourites[updatedIndex] = newTranslation;

    setFavourites(favourites);
    localStorage.setItem("favouriteTranslations", JSON.stringify(favourites));
  };

  return (
    <div className="p-4">
      <h1 className="px-8 text-3xl font-bold mb-6">Favourite Translations</h1>

      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourites.map((translation: Translation) => (
            <TranslationCard
              key={translation.id}
              translation={translation}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      ) : (
        <p className="text-lg">
          You don't have any favourite translations yet.
        </p>
      )}
    </div>
  );
};

export default Favourites;
