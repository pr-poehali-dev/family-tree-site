export interface Person {
  id: string;
  name: string;
  birthDate?: string;
  deathDate?: string;
  photo?: string;
  bio?: string;
  gender: "male" | "female" | "other";
  relationships: Relationship[];
}

export interface Relationship {
  type: RelationshipType;
  personId: string;
}

export enum RelationshipType {
  PARENT = "parent",
  CHILD = "child",
  SPOUSE = "spouse",
  SIBLING = "sibling",
}

export interface FamilyTreeData {
  persons: Person[];
  selectedPersonId?: string;
}

export interface TreePosition {
  x: number;
  y: number;
  level: number;
}
