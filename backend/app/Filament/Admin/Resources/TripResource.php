<?php

namespace App\Filament\Admin\Resources;

use App\Filament\Admin\Resources\TripResource\Pages;
use App\Filament\Admin\Resources\TripResource\RelationManagers;
use App\Models\Trips;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TripResource extends Resource
{
    protected static ?string $model = Trips::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Profile')
                        ->schema([
                            Forms\Components\TextInput::make(name:'contactName')->required(),
                            Forms\Components\TextInput::make(name:'contactPhone')->required(),
                            // Forms\Components\PASSWORD_BCRYPT::make(name:'password'),
                        ]),
                        Forms\Components\Section::make('Permissions')
                        ->schema([
                            Forms\Components\TextInput::make(name:'groupTitle') ,                           
                            Forms\Components\TextInput::make(name:'destination')
                            ->columnSpan("full")
                        ])->columns(2) 
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make(name:'date'), 
                Tables\Columns\TextColumn::make(name:'groupTitle'),                
                Tables\Columns\TextColumn::make(name:'destination')->sortable()->searchable(),
                Tables\Columns\TextColumn::make(name:'type'),
                Tables\Columns\TextColumn::make(name:'leaveTime')->sortable()->searchable(),
                Tables\Columns\TextColumn::make(name:'returnTime')->sortable()->searchable(),                
            ])
            ->defaultSort(column:'date', direction:'asc')
            
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTrips::route('/'),
            'create' => Pages\CreateTrip::route('/create'),
            'edit' => Pages\EditTrip::route('/{record}/edit'),
        ];
    }
}
