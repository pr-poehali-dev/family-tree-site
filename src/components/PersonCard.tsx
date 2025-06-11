import { Person, RelationshipType } from "@/types/family";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface PersonCardProps {
  person: Person;
  onEdit: (person: Person) => void;
  onDelete: (id: string) => void;
  getRelatedPersons: (personId: string, type: RelationshipType) => Person[];
}

export const PersonCard = ({
  person,
  onEdit,
  onDelete,
  getRelatedPersons,
}: PersonCardProps) => {
  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("ru-RU");
  };

  const getAge = () => {
    if (!person.birthDate) return "";
    const birth = new Date(person.birthDate);
    const end = person.deathDate ? new Date(person.deathDate) : new Date();
    const age = end.getFullYear() - birth.getFullYear();
    return `${age} ${person.deathDate ? "лет" : "лет"}`;
  };

  const parents = getRelatedPersons(person.id, RelationshipType.PARENT);
  const children = getRelatedPersons(person.id, RelationshipType.CHILD);
  const spouses = getRelatedPersons(person.id, RelationshipType.SPOUSE);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={person.photo} alt={person.name} />
          <AvatarFallback className="text-2xl">
            {person.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">{person.name}</h3>
        {getAge() && <p className="text-gray-600">{getAge()}</p>}
      </CardHeader>

      <CardContent className="space-y-4">
        {person.birthDate && (
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={16} />
            <span className="text-sm">
              Родился: {formatDate(person.birthDate)}
            </span>
          </div>
        )}

        {person.deathDate && (
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={16} />
            <span className="text-sm">
              Умер: {formatDate(person.deathDate)}
            </span>
          </div>
        )}

        {person.bio && (
          <div className="text-sm text-gray-700">
            <p>{person.bio}</p>
          </div>
        )}

        {parents.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-1">Родители:</h4>
            <ul className="text-sm text-gray-600">
              {parents.map((parent) => (
                <li key={parent.id}>{parent.name}</li>
              ))}
            </ul>
          </div>
        )}

        {spouses.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-1">Супруг(а):</h4>
            <ul className="text-sm text-gray-600">
              {spouses.map((spouse) => (
                <li key={spouse.id}>{spouse.name}</li>
              ))}
            </ul>
          </div>
        )}

        {children.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-1">Дети:</h4>
            <ul className="text-sm text-gray-600">
              {children.map((child) => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          <Button variant="outline" size="sm" onClick={() => onEdit(person)}>
            <Icon name="Edit" size={16} />
            Изменить
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(person.id)}
          >
            <Icon name="Trash" size={16} />
            Удалить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
