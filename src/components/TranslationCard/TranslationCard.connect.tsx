import { useState } from "react";
import { TranslationCardConnectProps } from "./TranslationCard.interface";
import { useAppDispatch } from "../../store/store";
import { TranslationCard } from "./TranslationCard";
import { deleteFavourite, editFavourite } from "../../store/actions";

export const TranslationCardConnect: React.FC<TranslationCardConnectProps> = ({
  translation,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTranslation, setEditedTranslation] = useState(translation);
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(editFavourite(editedTranslation));
    setIsEditing(false);
  };

  const handleDelete = () =>
    isEditing ? setIsEditing(false) : dispatch(deleteFavourite(translation.id));

  return (
    <TranslationCard
      translation={translation}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      editedTranslation={editedTranslation}
      setEditedTranslation={setEditedTranslation}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
