import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BeltTechniques } from './BeltTechniques';
import { TechniqueDetail } from './TechniqueDetail';
import { FavoriteTechniques } from './FavoriteTechniques';
import { belts, techniques, Technique } from '../data/judoData';

interface TechniquesPanelProps {
  currentBelt: string;
  favoriteTechniqueIds: string[];
  onToggleFavorite: (techniqueId: string) => void;
}

export function TechniquesPanel({ currentBelt, favoriteTechniqueIds, onToggleFavorite }: TechniquesPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);

  // Filtrar técnicas basadas en la búsqueda
  const filteredTechniques = techniques.filter(
    (tech) =>
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Técnicas para ascender al próximo cinturón
  const currentBeltData = belts.find(b => b.name === currentBelt);
  const nextBelt = belts.find(b => b.order === (currentBeltData?.order ?? 0) + 1);
  const techniquesForNextBelt = nextBelt
    ? techniques.filter(t => t.belt === nextBelt.name)
    : [];

  if (selectedTechnique) {
    return (
      <TechniqueDetail
        technique={selectedTechnique}
        onBack={() => setSelectedTechnique(null)}
        isFavorite={favoriteTechniqueIds.includes(selectedTechnique.id)}
        onToggleFavorite={onToggleFavorite}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Técnicas Favoritas */}
      <FavoriteTechniques
        favoriteTechniqueIds={favoriteTechniqueIds}
        onRemoveFavorite={onToggleFavorite}
        onSelectTechnique={setSelectedTechnique}
      />

      {/* Técnicas para Ascender */}
      {techniquesForNextBelt.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Técnicas para Ascender a Cinturón {nextBelt?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {techniquesForNextBelt.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechnique(tech)}
                  className="p-3 sm:p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-left transition-colors"
                >
                  <p className="font-medium text-slate-900 text-sm sm:text-base">{tech.name}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{tech.translation}</p>
                  <p className="text-xs text-slate-500 mt-1 capitalize">{tech.category}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Buscador */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Buscar Técnicas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              type="text"
              placeholder="Buscar por nombre de técnica..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-10 text-sm sm:text-base"
            />
          </div>

          {/* Resultados de Búsqueda */}
          {searchQuery && (
            <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
              {filteredTechniques.length > 0 ? (
                filteredTechniques.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechnique(tech)}
                    className="w-full p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-left transition-colors"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-medium text-slate-900 text-sm sm:text-base">{tech.name}</p>
                        <p className="text-xs sm:text-sm text-slate-600">{tech.translation}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs text-slate-500">{tech.belt}</p>
                        <p className="text-xs text-slate-500 capitalize">{tech.category}</p>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-center text-slate-500 py-4 text-sm sm:text-base">
                  No se encontraron técnicas
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Técnicas por Cinturón */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Todas las Técnicas Registradas</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={belts[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 h-auto">
              {belts.map((belt) => (
                <TabsTrigger
                  key={belt.id}
                  value={belt.id}
                  className="flex items-center gap-1 text-xs sm:text-sm py-2"
                >
                  <div
                    className="w-3 h-3 rounded-full border flex-shrink-0"
                    style={{ backgroundColor: belt.color }}
                  />
                  <span className="truncate">{belt.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {belts.map((belt) => (
              <TabsContent key={belt.id} value={belt.id}>
                <BeltTechniques
                  belt={belt}
                  onSelectTechnique={setSelectedTechnique}
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}