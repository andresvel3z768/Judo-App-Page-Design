import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { trainingSessions, TrainingSession } from '../data/judoData';

interface AttendanceViewProps {
  onBack: () => void;
  registeredSessions: string[];
  onToggleSession: (sessionId: string) => void;
}

export function AttendanceView({ onBack, registeredSessions, onToggleSession }: AttendanceViewProps) {
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(null);

  if (selectedSession) {
    const isRegistered = registeredSessions.includes(selectedSession.id);
    
    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={() => setSelectedSession(null)} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver a Horarios
        </Button>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-xl sm:text-2xl">{selectedSession.title}</CardTitle>
              <Badge 
                variant={isRegistered ? "default" : "outline"}
                className="text-sm"
              >
                {isRegistered ? 'Inscrito' : 'No inscrito'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Detalles del Entrenamiento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <User className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Instructor</h3>
                  <p className="text-base text-slate-900">{selectedSession.instructor}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Lugar</h3>
                  <p className="text-base text-slate-900">{selectedSession.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Día</h3>
                  <p className="text-base text-slate-900">{selectedSession.day}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Horario</h3>
                  <p className="text-base text-slate-900">{selectedSession.time}</p>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2">Descripción</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedSession.description}
              </p>
            </div>

            {/* Recomendaciones */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <h3 className="font-medium text-blue-900">Recomendaciones Importantes</h3>
              </div>
              <ul className="space-y-2">
                {selectedSession.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-blue-800">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de Inscripción */}
            <Button
              onClick={() => onToggleSession(selectedSession.id)}
              className="w-full sm:w-auto"
              variant={isRegistered ? "outline" : "default"}
            >
              {isRegistered ? 'Cancelar Asistencia' : 'Confirmar Asistencia'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Volver al Dashboard
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            <CardTitle className="text-xl sm:text-2xl">Agenda de Entrenamientos</CardTitle>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Selecciona los entrenamientos en los que deseas participar
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainingSessions.map((session) => {
              const isRegistered = registeredSessions.includes(session.id);
              
              return (
                <Card 
                  key={session.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    isRegistered ? 'border-2 border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedSession(session)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-base sm:text-lg">{session.title}</CardTitle>
                      {isRegistered && (
                        <Badge className="bg-blue-600">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Inscrito
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <User className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{session.instructor}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{session.day}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{session.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{session.location}</span>
                    </div>

                    <Button 
                      variant={isRegistered ? "outline" : "default"} 
                      className="w-full mt-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSession(session);
                      }}
                    >
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
