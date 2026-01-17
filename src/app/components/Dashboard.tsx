import { useState } from 'react';
import { User, LogOut, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TechniquesPanel } from './TechniquesPanel';
import { AttendanceView } from './AttendanceView';
import { belts } from '../data/judoData';

interface DashboardProps {
  username: string;
  isSensei: boolean;
  onLogout: () => void;
}

interface UserData {
  currentBelt: string;
  weight: number;
  height: number;
}

export function Dashboard({ username, isSensei, onLogout }: DashboardProps) {
  const [userData] = useState<UserData>({
    currentBelt: 'Verde',
    weight: 75,
    height: 175,
  });

  const [favoriteTechniqueIds, setFavoriteTechniqueIds] = useState<string[]>([]);
  const [registeredSessions, setRegisteredSessions] = useState<string[]>([]);
  const [showAttendance, setShowAttendance] = useState(false);

  const currentBelt = belts.find(b => b.name === userData.currentBelt);
  const nextBelt = belts.find(b => b.order === (currentBelt?.order ?? 0) + 1);

  const handleToggleFavorite = (techniqueId: string) => {
    setFavoriteTechniqueIds(prev => 
      prev.includes(techniqueId)
        ? prev.filter(id => id !== techniqueId)
        : [...prev, techniqueId]
    );
  };

  const handleToggleSession = (sessionId: string) => {
    setRegisteredSessions(prev => 
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  if (showAttendance) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <div className="flex items-center gap-2">
                <div className="bg-slate-200 p-2 rounded-full">
                  <User className="w-5 h-5 text-slate-700" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-slate-900">{username}</span>
                  {isSensei && (
                    <span className="text-xs text-blue-600 font-medium">Sensei</span>
                  )}
                </div>
              </div>

              <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">JUDO ITM</h1>
              </div>

              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Salir</span>
              </Button>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <AttendanceView 
            onBack={() => setShowAttendance(false)}
            registeredSessions={registeredSessions}
            onToggleSession={handleToggleSession}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* Usuario - Esquina Superior Izquierda */}
            <div className="flex items-center gap-2">
              <div className="bg-slate-200 p-2 rounded-full">
                <User className="w-5 h-5 text-slate-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">{username}</span>
                {isSensei && (
                  <span className="text-xs text-blue-600 font-medium">Sensei</span>
                )}
              </div>
            </div>

            {/* Nombre del Club - Centro */}
            <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">JUDO ITM</h1>
            </div>

            {/* Cinturón Actual - Parte Derecha */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-slate-600">Cinturón Actual:</span>
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                  <div
                    className="w-6 h-6 rounded-full border-2 border-slate-300"
                    style={{ backgroundColor: currentBelt?.color }}
                  />
                  <span className="font-medium text-sm sm:text-base">{userData.currentBelt}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Salir</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Info del Usuario - Centro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Próximo Cinturón</CardTitle>
            </CardHeader>
            <CardContent>
              {nextBelt ? (
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-slate-300"
                    style={{ backgroundColor: nextBelt.color }}
                  />
                  <span className="font-medium text-lg sm:text-xl">{nextBelt.name}</span>
                </div>
              ) : (
                <span className="text-sm sm:text-base text-slate-600">Has alcanzado el máximo nivel</span>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Peso Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl sm:text-3xl font-medium">{userData.weight} kg</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Altura</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl sm:text-3xl font-medium">{userData.height} cm</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowAttendance(true)}>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Asistencias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-2">
                {registeredSessions.length} sesiones registradas
              </p>
              <Button variant="default" className="w-full" size="sm">
                Ver Horarios
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Panel de Técnicas */}
        <TechniquesPanel 
          currentBelt={userData.currentBelt} 
          favoriteTechniqueIds={favoriteTechniqueIds}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
    </div>
  );
}