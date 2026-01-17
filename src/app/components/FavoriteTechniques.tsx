import { Heart, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Technique, techniques } from '../data/judoData';

interface FavoriteTechniquesProps {
  favoriteTechniqueIds: string[];
  onRemoveFavorite: (techniqueId: string) => void;
  onSelectTechnique: (technique: Technique) => void;
}

export function FavoriteTechniques({ 
  favoriteTechniqueIds, 
  onRemoveFavorite,
  onSelectTechnique 
}: FavoriteTechniquesProps) {
  const favoriteTechniques = techniques.filter(t => 
    favoriteTechniqueIds.includes(t.id)
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <CardTitle className="text-base sm:text-lg">Mis Técnicas Favoritas</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {favoriteTechniques.length === 0 ? (
          <div className="text-center py-8 text-slate-500">
            <Heart className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p className="text-sm sm:text-base">No tienes técnicas favoritas aún</p>
            <p className="text-xs sm:text-sm mt-1">
              Marca técnicas como favoritas al verlas en detalle
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {favoriteTechniques.map((tech) => (
              <div
                key={tech.id}
                className="relative group p-3 sm:p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              >
                <button
                  onClick={() => onSelectTechnique(tech)}
                  className="w-full text-left"
                >
                  <p className="font-medium text-slate-900 text-sm sm:text-base pr-8">
                    {tech.name}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">{tech.translation}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-slate-500">{tech.belt}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 capitalize">{tech.category}</span>
                  </div>
                </button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveFavorite(tech.id)}
                  className="absolute top-2 right-2 p-1 h-auto opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4 text-slate-400 hover:text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
