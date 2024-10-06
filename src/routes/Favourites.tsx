import TranslationCard from "../components/TranslationCard/TranslationCard";
import { Translation } from "../utils/types";

import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Favourites: React.FC = () => {
  const favourites = useSelector(
    (state: RootState) => state.translations.favourites
  );

  return (
    <div className="p-4">
      <h1 className="px-8 text-3xl font-bold mb-6">Favourite Translations</h1>

      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourites.map((translation: Translation) => (
            <TranslationCard key={translation.id} translation={translation} />
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
