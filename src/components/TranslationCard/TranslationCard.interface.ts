import { Translation } from "../../utils/types";

export interface TranslationCardConnectProps {
  translation: Translation;
}

export interface TranslationCardProps {
  translation: Translation;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  editedTranslation: Translation;
  setEditedTranslation: (editedTranslation: Translation) => void;
  onEdit: () => void;
  onDelete: () => void;
}
