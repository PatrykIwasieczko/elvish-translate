import { Translation } from "../utils/types";

import { RootState, useAppSelector } from "../store/store";
import { TranslationCardConnect } from "../components/TranslationCard/TranslationCard.connect";

const Favourites: React.FC = () => {
  const favourites = useAppSelector((state: RootState) => state.favourites);

  return (
    <div className="p-4">
      <h1 className="px-8 text-3xl font-bold mb-6">Favourite Translations</h1>

      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favourites.map((translation: Translation) => (
            <TranslationCardConnect
              key={translation.id}
              translation={translation}
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
