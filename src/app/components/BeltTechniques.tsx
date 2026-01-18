import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Belt, techniques, Technique } from '../data/judoData';
import { Button } from './ui/button';

interface BeltTechniquesProps {
  belt: Belt;
  onSelectTechnique: (technique: Technique) => void;
}

export function BeltTechniques({ belt, onSelectTechnique }: BeltTechniquesProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const beltTechniques = techniques.filter((t) => t.belt === belt.name);
  const tachiWaza = beltTechniques.filter((t) => t.category === 'NAGE-WAZA');
  const neWaza = beltTechniques.filter((t) => t.category === 'KATAME-WAZA');      

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="space-y-4 py-4">
      {/* Tachi-waza */}
      <div className="border rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          className="w-full justify-between p-3 sm:p-4 h-auto"
          onClick={() => toggleCategory('NAGE-WAZA')}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: belt.color }}
            />
            <span className="font-medium text-sm sm:text-base">NAGE-WAZA (Técnicas de Lanzamiento)</span>
            <span className="text-xs sm:text-sm text-slate-500">({tachiWaza.length})</span>
          </div>
          {expandedCategory === 'NAGE-WAZA' ? (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          )}
        </Button>

        {expandedCategory === 'NAGE-WAZA' && (
          <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2">
            {tachiWaza.length > 0 ? (
              tachiWaza.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => onSelectTechnique(tech)}
                  className="w-full p-2 sm:p-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-left transition-colors border border-slate-200"
                >
                  <p className="font-medium text-slate-900 text-sm sm:text-base">{tech.name}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{tech.translation}</p>
                </button>
              ))
            ) : (
              <p className="text-center text-slate-500 py-4 text-xs sm:text-sm">
                No hay técnicas registradas por ti
              </p>
            )}
          </div>
        )}
      </div>

      {/* Ne-waza */}
      <div className="border rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          className="w-full justify-between p-3 sm:p-4 h-auto"
          onClick={() => toggleCategory('KATAME-WAZA')}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: belt.color }}
            />
            <span className="font-medium text-sm sm:text-base">KATAME-WAZA (Técnicas de Suelo)</span>
            <span className="text-xs sm:text-sm text-slate-500">({neWaza.length})</span>
          </div>
          {expandedCategory === 'KATAME-WAZA' ? (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          )}
        </Button>

        {expandedCategory === 'KATAME-WAZA' && (
          <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2">
            {neWaza.length > 0 ? (
              neWaza.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => onSelectTechnique(tech)}
                  className="w-full p-2 sm:p-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-left transition-colors border border-slate-200"
                >
                  <p className="font-medium text-slate-900 text-sm sm:text-base">{tech.name}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{tech.translation}</p>
                </button>
              ))
            ) : (
              <p className="text-center text-slate-500 py-4 text-xs sm:text-sm">
                No hay técnicas registradas
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}