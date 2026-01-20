<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * GET /api/notes
     * Retourne la liste des notes triées par date décroissante
     */
    public function index()
    {
        return response()->json(
            Note::orderBy('created_at', 'desc')->get()
        );
    }

    /**
     * POST /api/notes
     * Création d'une nouvelle note avec validation
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|min:3'
        ]);

        $note = Note::create($validated);

        return response()->json($note, 201);
    }

    /**
     * DELETE /api/notes/{id}
     * Suppression d'une note existante
     */
    public function destroy($id)
    {
        $note = Note::findOrFail($id);
        $note->delete();

        return response()->json([
            'message' => 'Note supprimée'
        ]);
    }
}
