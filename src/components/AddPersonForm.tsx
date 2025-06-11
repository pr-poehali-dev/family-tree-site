import { useState } from "react";
import { Person, RelationshipType } from "@/types/family";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface AddPersonFormProps {
  persons: Person[];
  onAddPerson: (person: Omit<Person, "id">) => void;
  onCancel: () => void;
}

export const AddPersonForm = ({
  persons,
  onAddPerson,
  onCancel,
}: AddPersonFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    deathDate: "",
    photo: "",
    bio: "",
    gender: "male" as "male" | "female" | "other",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    const newPerson: Omit<Person, "id"> = {
      ...formData,
      birthDate: formData.birthDate || undefined,
      deathDate: formData.deathDate || undefined,
      photo:
        formData.photo ||
        `https://images.unsplash.com/photo-${formData.gender === "female" ? "1494790108755-2b1c77dbc30a" : "1507003211169-0a1dd7228f2d"}?w=150&h=150&fit=crop&crop=face`,
      relationships: [],
    };

    onAddPerson(newPerson);
    setFormData({
      name: "",
      birthDate: "",
      deathDate: "",
      photo: "",
      bio: "",
      gender: "male",
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Plus" size={20} />
          Добавить члена семьи
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Введите полное имя"
              required
            />
          </div>

          <div>
            <Label htmlFor="gender">Пол</Label>
            <Select
              value={formData.gender}
              onValueChange={(value: "male" | "female" | "other") =>
                setFormData((prev) => ({ ...prev, gender: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Мужской</SelectItem>
                <SelectItem value="female">Женский</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="birthDate">Дата рождения</Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, birthDate: e.target.value }))
              }
            />
          </div>

          <div>
            <Label htmlFor="deathDate">Дата смерти (если применимо)</Label>
            <Input
              id="deathDate"
              type="date"
              value={formData.deathDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, deathDate: e.target.value }))
              }
            />
          </div>

          <div>
            <Label htmlFor="photo">Ссылка на фото</Label>
            <Input
              id="photo"
              type="url"
              value={formData.photo}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, photo: e.target.value }))
              }
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <Label htmlFor="bio">Биография</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, bio: e.target.value }))
              }
              placeholder="Краткая информация о человеке"
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              <Icon name="Plus" size={16} />
              Добавить
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Отмена
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
