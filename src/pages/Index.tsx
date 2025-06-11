import { useState } from "react";
import { useFamilyTree } from "@/hooks/useFamilyTree";
import { FamilyTree } from "@/components/FamilyTree";
import { PersonCard } from "@/components/PersonCard";
import { AddPersonForm } from "@/components/AddPersonForm";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const {
    familyData,
    selectedPerson,
    addPerson,
    updatePerson,
    deletePerson,
    selectPerson,
    getRelatedPersons,
  } = useFamilyTree();

  const handleAddPerson = (person: Parameters<typeof addPerson>[0]) => {
    addPerson(person);
    setShowAddForm(false);
  };

  const handleEditPerson = (person: Parameters<typeof updatePerson>[1]) => {
    // Для простоты пока не реализуем редактирование
    console.log("Edit person:", person);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🌳 Семейное Древо
          </h1>
          <p className="text-gray-600">
            Создайте и изучите историю вашей семьи
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2"
          >
            <Icon name="Plus" size={20} />
            Добавить члена семьи
          </Button>

          <div className="text-sm text-gray-600 flex items-center">
            Всего членов семьи: {familyData.persons.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Family Tree */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Users" size={24} />
                Члены семьи
              </h2>
              <FamilyTree
                persons={familyData.persons}
                selectedPersonId={familyData.selectedPersonId}
                onSelectPerson={selectPerson}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {showAddForm && (
              <AddPersonForm
                persons={familyData.persons}
                onAddPerson={handleAddPerson}
                onCancel={() => setShowAddForm(false)}
              />
            )}

            {selectedPerson && !showAddForm && (
              <PersonCard
                person={selectedPerson}
                onEdit={handleEditPerson}
                onDelete={deletePerson}
                getRelatedPersons={getRelatedPersons}
              />
            )}

            {!selectedPerson && !showAddForm && (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Icon
                  name="MousePointer"
                  size={48}
                  className="mx-auto text-gray-400 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Выберите члена семьи
                </h3>
                <p className="text-gray-500 text-sm">
                  Кликните на любого члена семьи, чтобы посмотреть подробную
                  информацию
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
