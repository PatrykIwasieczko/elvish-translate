import { render } from "@testing-library/react";
import { TranslationCard } from "./TranslationCard";
import { Translation } from "../../utils/types";

describe("components/TranslationCard", () => {
  const mockedTranslation: Translation = {
    id: "1",
    english: "English text",
    elvish: "Elvish text",
  };

  it("should render TranslationCard component", () => {
    const { container } = render(
      <TranslationCard
        translation={mockedTranslation}
        isEditing={false}
        setIsEditing={jest.fn()}
        editedTranslation={mockedTranslation}
        setEditedTranslation={jest.fn()}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render TranslationCard component in edit mode", () => {
    const { container } = render(
      <TranslationCard
        translation={mockedTranslation}
        isEditing={true}
        setIsEditing={jest.fn()}
        editedTranslation={mockedTranslation}
        setEditedTranslation={jest.fn()}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
