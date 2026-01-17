import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Technique } from '../data/judoData';

interface TechniqueDetailProps {
  technique: Technique;
  onBack: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (techniqueId: string) => void;
}

export function TechniqueDetail({ technique, onBack, isFavorite, onToggleFavorite }: TechniqueDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Button>
        
        {onToggleFavorite && (
          <Button
            variant={isFavorite ? "default" : "outline"}
            onClick={() => onToggleFavorite(technique.id)}
            className="flex items-center gap-2"
          >
            <Heart 
              className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`}
            />
            <span className="hidden sm:inline">
              {isFavorite ? 'En Favoritos' : 'Agregar a Favoritos'}
            </span>
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">{technique.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Traducción */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Traducción</h3>
            <p className="text-lg sm:text-xl text-slate-900">{technique.translation}</p>
          </div>

          {/* Descripción */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Descripción</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{technique.description}</p>
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-1">Categoría</h3>
              <p className="text-base sm:text-lg capitalize">
                {technique.category === 'tachi-waza'
                  ? 'Tachi-waza (Técnicas de Pie)'
                  : 'Ne-waza (Técnicas de Suelo)'}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-1">Cinturón</h3>
              <p className="text-base sm:text-lg">{technique.belt}</p>
            </div>
          </div>

          {/* Video */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-3">Video de Referencia</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-900">
              <iframe
                width="100%"
                height="100%"
                src={technique.videoUrl}
                title={technique.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-lg border border-slate-200">
            <p className="text-xs sm:text-sm text-slate-600">
              Esta técnica forma parte del programa de cinturón {technique.belt}. Practica con
              un instructor calificado para dominar la ejecución correcta y segura de esta
              técnica.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}