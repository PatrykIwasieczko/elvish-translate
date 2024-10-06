import { TranslationCardProps } from "./TranslationCard.interface";

export const TranslationCard: React.FC<TranslationCardProps> = ({
  isEditing,
  setIsEditing,
  editedTranslation,
  setEditedTranslation,
  translation,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg my-4 min-h-[200px] w-full flex flex-col justify-between">
      <div className="px-6 py-4">
        {isEditing ? (
          <div className="text-gray-800 text-lg mb-4">
            <p>
              <strong>English:</strong>{" "}
              <input
                value={editedTranslation.english}
                onChange={(e) =>
                  setEditedTranslation({
                    ...editedTranslation,
                    english: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              />
            </p>
            <p>
              <strong>Elvish:</strong>{" "}
              <input
                value={editedTranslation.elvish}
                onChange={(e) =>
                  setEditedTranslation({
                    ...editedTranslation,
                    elvish: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              />
            </p>
          </div>
        ) : (
          <div className="text-gray-800 text-lg mb-4">
            <p className="break-words">
              <strong>English:</strong> {translation.english}
            </p>
            <p className="break-words">
              <strong>Elvish:</strong> {translation.elvish}
            </p>
          </div>
        )}
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
        {isEditing ? (
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          {isEditing ? "Cancel" : "Delete"}
        </button>
      </div>
    </div>
  );
};
