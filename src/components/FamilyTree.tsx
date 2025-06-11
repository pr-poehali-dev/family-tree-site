import { useState } from "react";
import { Person } from "@/types/family";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface FamilyTreeProps {
  persons: Person[];
  selectedPersonId?: string;
  onSelectPerson: (id: string) => void;
}

export const FamilyTree = ({
  persons,
  selectedPersonId,
  onSelectPerson,
}: FamilyTreeProps) => {
  const formatAge = (birthDate?: string, deathDate?: string) => {
    if (!birthDate) return "";
    const birth = new Date(birthDate);
    const end = deathDate ? new Date(deathDate) : new Date();
    const age = end.getFullYear() - birth.getFullYear();
    return `${age} ${deathDate ? "лет" : "лет"}`;
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {persons.map((person) => (
          <div
            key={person.id}
            className={`relative p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
              selectedPersonId === person.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-gray-200 hover:border-primary/50"
            }`}
            onClick={() => onSelectPerson(person.id)}
          >
            <div className="text-center space-y-3">
              <Avatar className="w-16 h-16 mx-auto">
                <AvatarImage src={person.photo} alt={person.name} />
                <AvatarFallback className="text-lg">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="font-semibold text-lg">{person.name}</h3>
                {formatAge(person.birthDate, person.deathDate) && (
                  <p className="text-sm text-gray-600">
                    {formatAge(person.birthDate, person.deathDate)}
                  </p>
                )}
                {person.birthDate && (
                  <p className="text-xs text-gray-500">
                    {new Date(person.birthDate).getFullYear()}
                    {person.deathDate &&
                      ` - ${new Date(person.deathDate).getFullYear()}`}
                  </p>
                )}
              </div>

              {person.bio && (
                <p className="text-xs text-gray-600 line-clamp-2">
                  {person.bio}
                </p>
              )}

              <div className="flex items-center justify-center">
                <Icon
                  name={person.gender === "female" ? "User" : "UserCheck"}
                  size={16}
                  className="text-gray-400"
                />
              </div>
            </div>

            {selectedPersonId === person.id && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} className="text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {persons.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Users" size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Семейное древо пусто
          </h3>
          <p className="text-gray-500">
            Добавьте первого члена семьи, чтобы начать построение древа
          </p>
        </div>
      )}
    </div>
  );
};
