import { useState, useEffect, useMemo } from "react";
import { Person, FamilyTreeData, RelationshipType } from "@/types/family";

const STORAGE_KEY = "family-tree-data";

const defaultPerson: Person = {
  id: "1",
  name: "Иван Петров",
  birthDate: "1970-05-15",
  photo:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  gender: "male",
  bio: "Основатель семьи",
  relationships: [],
};

export const useFamilyTree = () => {
  const [familyData, setFamilyData] = useState<FamilyTreeData>({
    persons: [defaultPerson],
    selectedPersonId: "1",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFamilyData(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading family data:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(familyData));
  }, [familyData]);

  const addPerson = (person: Omit<Person, "id">) => {
    const newPerson: Person = {
      ...person,
      id: Date.now().toString(),
    };

    setFamilyData((prev) => ({
      ...prev,
      persons: [...prev.persons, newPerson],
    }));
  };

  const updatePerson = (id: string, updates: Partial<Person>) => {
    setFamilyData((prev) => ({
      ...prev,
      persons: prev.persons.map((person) =>
        person.id === id ? { ...person, ...updates } : person,
      ),
    }));
  };

  const deletePerson = (id: string) => {
    setFamilyData((prev) => ({
      ...prev,
      persons: prev.persons.filter((person) => person.id !== id),
      selectedPersonId:
        prev.selectedPersonId === id ? undefined : prev.selectedPersonId,
    }));
  };

  const selectPerson = (id: string) => {
    setFamilyData((prev) => ({
      ...prev,
      selectedPersonId: id,
    }));
  };

  const selectedPerson = useMemo(() => {
    return familyData.persons.find((p) => p.id === familyData.selectedPersonId);
  }, [familyData.persons, familyData.selectedPersonId]);

  const getRelatedPersons = (
    personId: string,
    relationshipType: RelationshipType,
  ) => {
    const person = familyData.persons.find((p) => p.id === personId);
    if (!person) return [];

    const relatedIds = person.relationships
      .filter((rel) => rel.type === relationshipType)
      .map((rel) => rel.personId);

    return familyData.persons.filter((p) => relatedIds.includes(p.id));
  };

  return {
    familyData,
    selectedPerson,
    addPerson,
    updatePerson,
    deletePerson,
    selectPerson,
    getRelatedPersons,
  };
};
